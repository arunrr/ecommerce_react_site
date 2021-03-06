"use strict";

const stripe = require("stripe")("sk_test_lYPlMXKHTinFJFsjxXCTcfST00UebOHO76");

/**
 * Orders.js controller
 *
 * @description: A set of functions called "actions" for managing `Orders`.
 */

module.exports = {
  /**
   * Retrieve orders records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.orders.search(ctx.query);
    } else {
      return strapi.services.orders.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a orders record.
   *
   * @return {Object}
   */

  findOne: async ctx => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.orders.fetch(ctx.params);
  },

  /**
   * Count orders records.
   *
   * @return {Number}
   */

  count: async ctx => {
    return strapi.services.orders.count(ctx.query);
  },

  /**
   * Create a/an orders record.
   *
   * @return {Object}
   */

  create: async ctx => {
    const {
      address,
      postalCode,
      city,
      brews,
      amount,
      token
    } = ctx.request.body;

    // send charge to stripe
    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: "usd",
      description: `Order ${new Date(Date.now())} - User ${ctx.state.user._id}`,
      shipping: {
        name: ctx.state.user.username,
        address: {
          line1: address,
          postal_code: postalCode,
          city: city,
          state: "CA",
          country: "US"
        }
      },
      source: token
    });

    // creating order in the database
    const order = await strapi.services.orders.add({
      user: ctx.state.user._id,
      address,
      amount,
      brews,
      postalCode,
      city
    });

    return order;
  },

  /**
   * Update a/an orders record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.orders.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an orders record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.orders.remove(ctx.params);
  }
};
