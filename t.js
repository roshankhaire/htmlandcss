class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insertFirst(data){
        let n=new Node(data)
        if(this.head==null){
            this.head=n;
            this.tail=n;
        }
        if(this.size==1){
            n.next=this.head;
            this.head=n;
            this.tail=n.next;
        }
        else{
           
        }
        this.size++;
    }
    printData(){
        let current=this.head;
        while(current!=null){
            console.log(current);
            current=current.next;
           
        }
      

    }
}
let res=new linkedList();
res.insertFirst(45)
res.insertFirst(90)
res.printData()
console.log(res)