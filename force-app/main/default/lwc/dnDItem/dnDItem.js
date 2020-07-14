import { LightningElement,api } from 'lwc';

export default class DnDItem extends LightningElement {
    @api ditem;

    dragItem(evt){
        evt.dataTransfer.setData("dragItem",JSON.stringify(this.ditem));
        evt.dataTransfer.effectAllowed = 'move';
    }

    dropItem(evt){
        if(evt.stopPropagation){
            evt.stopPropagation();
        }
        return false;
    }
}