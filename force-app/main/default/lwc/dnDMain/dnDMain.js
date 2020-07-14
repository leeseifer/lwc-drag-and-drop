import { LightningElement,track } from 'lwc';

export default class DnDMain extends LightningElement {
    @track ditems1 = [
        {
            id:"001",
            name:"001"
        },
        {
            id:"002",
            name:"002"
        },
        {
            id:"003",
            name:"003"
        }
    ];

    @track ditems2 = [];
}