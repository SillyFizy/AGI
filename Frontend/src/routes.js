import HomeView from "@/Views/HomeView.vue";
import SignUp from "@/Views/SignUp.vue";
import ChatView from "@/Views/ChatView.vue";
import SignIn from "@/Views/SignIn.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'Home',
        path: '/home',
        component: HomeView,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: 'SignUp',
        path: '/home/signup',
        component: SignUp,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: 'SignIn',
        path: '/home/signin',
        component: SignIn,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: 'Chat',
        path: '/chat',
        component: ChatView,
        meta: {
            requiresAuth: true
        }
    }
]
export default routes