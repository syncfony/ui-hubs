/* TODO: This polyfil is only for testing. Remove for production builds */
const {XMLHttpRequest} = require('xmlhttprequest');
(global as any).XMLHttpRequest = XMLHttpRequest;

export * from './hubs';
