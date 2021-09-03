import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
	{
		path: "/",
		component: () => import('@/components/Home'),
		name: "home"
	},
	{
		path: "/login",
		component: () => import('@/components/member/Login'),
		name: "login"
	},
	{
		path: "/register",
		component: () => import('@/components/member/Register'),
		name: "register"
	},
];