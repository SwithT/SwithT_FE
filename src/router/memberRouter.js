import MemberMainView from "@/views/member/MemberMainView.vue";
import MemberSocialExplainView from "@/views/member/MemberSocialExplainView.vue";
import TutorEmailRegisterView from "@/views/member/TutorEmailRegisterView.vue";
import MemberTutorSocialRegisterView from "@/views/member/MemberTutorSocialRegisterView.vue";
import MemberTuteeSocialRegisterView from "@/views/member/MemberTuteeSocialRegisterView.vue";
import MemberEmailLoginView from "@/views/member/MemberEmailLoginView.vue";
import TuteeEmailRegisterView from "@/views/member/TuteeEmailRegisterView.vue";

export const memberRouter = [
    {
        path: '/member/main',
        name: 'MemberMainView',
        component: MemberMainView
    },
    {
        path: '/member/explain',
        name: 'MemberSocialExplainView',
        component: MemberSocialExplainView
    },
    {
        path: '/member/email/register/tutor',
        name: 'TutorEmailRegisterView',
        component: TutorEmailRegisterView
    },
    {
        path: '/member/social/register/tutor',
        name: 'MemberTutorSocialRegisterView',
        component: MemberTutorSocialRegisterView
    },
    {
        path: '/member/social/register/tutee',
        name: 'MemberTuteeSocialRegisterView',
        component: MemberTuteeSocialRegisterView
    },
    {
        path: '/member/email/login',
        name: 'MemberEmailLoginView',
        component: MemberEmailLoginView
    },
    {
        path: '/member/email/register/tutee',
        name: 'TuteeEmailRegisterView',
        component: TuteeEmailRegisterView
    },
]