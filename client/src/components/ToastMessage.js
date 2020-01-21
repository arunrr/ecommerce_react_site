import React from 'react';
import { Toast } from 'gestalt';

export default function ToastMessage({ message, show }) {
  return show && <Toast color="orange" text={message} />;
}
