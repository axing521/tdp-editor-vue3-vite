import { createRuntime } from './runtime';

const testData = {
    appStore: {
        mode: 'runtime',
        pages: [
            {
                key: 'PageRenderer_xvzKR7HSp115BZkY',
                code: '',
                label: '表单1',
                icon: 'flex',
                type: 'PageRenderer',
                group: '-1',
                selected: true,
                submitState: 'unsaved',
                props: {
                    pageData: { type: 'object', value: { text: 'testExpression' } },
                    pageMethods: {
                        type: 'object',
                        value: { setText: 'this.pageData.text = new Date().toLocaleTimeString();' },
                    },
                },
                list: [
                    {
                        key: 'FdForm_adNCEwuCQvmeXGHa',
                        code: '',
                        label: '表单',
                        icon: 'form',
                        group: '0',
                        type: 'FdForm',
                        isFormer: true,
                        order: 200,
                        list: [
                            {
                                key: 'FdButton_lRfLNBMBn8hdRCDV',
                                code: '',
                                label: '按钮',
                                icon: 'button',
                                group: '2',
                                type: 'FdButton',
                                isFormer: true,
                                order: 302,
                                name: 'FdButton_lRfLNBMBn8hdRCDV',
                                list: [],
                                formInfo: { formFieldName: 'FdButton_lRfLNBMBn8hdRCDV', rules: [] },
                                props: {
                                    text: { type: 'string', value: '按钮' },
                                    htmlType: { type: 'string', value: 'button' },
                                },
                            },
                        ],
                        name: 'FdForm_adNCEwuCQvmeXGHa',
                    },
                    {
                        key: 'FdForm_IFXxkcFsksfVO8Y5',
                        code: '',
                        label: '表单',
                        icon: 'form',
                        group: '0',
                        type: 'FdForm',
                        isFormer: true,
                        order: 200,
                        list: [
                            {
                                key: 'FdRate_YfXzVxXrmAwnBY4Y',
                                code: '',
                                label: '评分',
                                icon: 'Ratings',
                                group: '2',
                                type: 'FdRate',
                                isFormer: true,
                                listGroup: 'business',
                                order: 307,
                                name: 'FdRate_YfXzVxXrmAwnBY4Y',
                                list: [],
                                formInfo: { formFieldName: 'FdRate_YfXzVxXrmAwnBY4Y', rules: [] },
                                props: {
                                    label: { type: 'string', value: '' },
                                    defaultValue: { type: 'number', value: 3 },
                                },
                            },
                        ],
                        name: 'FdForm_IFXxkcFsksfVO8Y5',
                    },
                ],
            },
        ],
        pageForms: {},
        activePage: {
            key: 'PageRenderer_xvzKR7HSp115BZkY',
            code: '',
            label: '表单1',
            icon: 'flex',
            type: 'PageRenderer',
            group: '-1',
            selected: true,
            submitState: 'unsaved',
            props: {
                pageData: { type: 'object', value: { text: 'testExpression' } },
                pageMethods: {
                    type: 'object',
                    value: { setText: 'this.pageData.text = new Date().toLocaleTimeString();' },
                },
            },
            list: [
                {
                    key: 'FdForm_adNCEwuCQvmeXGHa',
                    code: '',
                    label: '表单',
                    icon: 'form',
                    group: '0',
                    type: 'FdForm',
                    isFormer: true,
                    order: 200,
                    list: [
                        {
                            key: 'FdButton_lRfLNBMBn8hdRCDV',
                            code: '',
                            label: '按钮',
                            icon: 'button',
                            group: '2',
                            type: 'FdButton',
                            isFormer: true,
                            order: 302,
                            name: 'FdButton_lRfLNBMBn8hdRCDV',
                            list: [],
                            formInfo: { formFieldName: 'FdButton_lRfLNBMBn8hdRCDV', rules: [] },
                            props: {
                                text: { type: 'string', value: '按钮' },
                                htmlType: { type: 'string', value: 'button' },
                            },
                        },
                    ],
                    name: 'FdForm_adNCEwuCQvmeXGHa',
                },
                {
                    key: 'FdForm_IFXxkcFsksfVO8Y5',
                    code: '',
                    label: '表单',
                    icon: 'form',
                    group: '0',
                    type: 'FdForm',
                    isFormer: true,
                    order: 200,
                    list: [
                        {
                            key: 'FdRate_YfXzVxXrmAwnBY4Y',
                            code: '',
                            label: '评分',
                            icon: 'Ratings',
                            group: '2',
                            type: 'FdRate',
                            isFormer: true,
                            listGroup: 'business',
                            order: 307,
                            name: 'FdRate_YfXzVxXrmAwnBY4Y',
                            list: [],
                            formInfo: { formFieldName: 'FdRate_YfXzVxXrmAwnBY4Y', rules: [] },
                            props: {
                                label: { type: 'string', value: '' },
                                defaultValue: { type: 'number', value: 3 },
                            },
                        },
                    ],
                    name: 'FdForm_IFXxkcFsksfVO8Y5',
                },
            ],
        },
    },
};

const tdpRuntime = createRuntime({
    container: '#app',
});

setTimeout(() => {
    tdpRuntime.setRuntimeJson(testData.appStore as any);
}, 5000);
