import './vendor';
import './helpers';
import './components/social';
import './components/header';
import './components/sliderCooking';
import './components/ticker';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();

scrollToAnchor.init();
lazyLoading.init();
