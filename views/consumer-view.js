import { loadComponent } from '../lib/fetch-template.js'
import { isInstance } from '../lib/validation.js'
import { Consumer } from '../models/consumer.js'
import { config } from '../config.js'
import { numL10n, percL10n } from '../lib/fmt.js'
import ShowHideComponent from '../components/show-hide.js'
import ExtLink from '../components/ext-link.js'
import IconComponent from '../components/icon.js'
import ConsumptionView from './consumption-view.js'

export default {
    template: await loadComponent(import.meta.url, true),
    computed: {
        config() {
            return config
        }
    },
    props: {
        consumer: {
            type: Object,
            validator: v => isInstance(v, Consumer),
        },
    },
    methods: {
        percL10n,
        numL10n,
    },
    components: {
        ExtLink,
        IconComponent,
        ConsumptionView,
        ShowHideComponent,
    },
}