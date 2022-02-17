import Router from "next/router";
import NProgress from "nprogress";

let timer;
let isLoading = false;
let activeRequests = 0;
const delay = 250;

function load() {
  if (isLoading) {
    return;
  }
  isLoading = true;
  NProgress.start();
}

function stop() {
  if (activeRequests > 0) {
    return;
  }
  isLoading = false;
  NProgress.done();
}

Router.events.on("routeChangeStart", load);
Router.events.on("routeChangeComplete", stop);
Router.events.on("routeChangeError", stop);

export default function TopProgressBar() {
  return null;
}