import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert,
    Menu,
    MenuItem,
    Avatar
} from 'element-ui';

const elements = [
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert,
    Menu,
    MenuItem,
    Avatar
];

locale.use(lang);

elements.forEach(El => Vue.use(El, {locale}));