import { LightningElement,api,track } from 'lwc';
let dragItem = undefined;
export default class DnDPanel extends LightningElement {
    @api ditems =[];
    @track tempItems = [];
    connectedCallback(){
        this.tempItems = [...this.ditems];
    }
    allowDrop(evt){
        evt.preventDefault();
    }

    dropItem(evt){
        evt.preventDefault();
        var item = JSON.parse(evt.dataTransfer.getData("dragItem"));
        console.log(item.id);
        if(item){
            let fountItem = this.tempItems.find(a =>{
               return  a.id === item.id;
            })

            if(!fountItem){
                this.tempItems = [...this.tempItems, item];
                dragItem = item;
            }
        }
    }

    dragEndItem(evt){
        let items = evt.dataTransfer.items;
        console.log(dragItem);
        if(dragItem){
            var index = this.tempItems.map(item => item.id).indexOf(dragItem.id);
            this.tempItems.splice(index,1);
            dragItem =undefined;
        }
        
        
    }
}