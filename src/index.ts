/**
 * Created by Jamie on 2016-09-26.
 */
import {COMPONENTS} from './components';
import {DIRECTIVES} from './directives';
import {PIPES} from './pipes';
import {SERVICES} from './services';

export * from './components';
export * from './directives';
export * from './services';
export * from './pipes';
export * from './module';

export default {
    components: [COMPONENTS],
    directives: [DIRECTIVES],
    pipes: [PIPES],
    providers: [SERVICES]
};