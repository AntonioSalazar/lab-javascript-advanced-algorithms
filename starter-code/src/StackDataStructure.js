function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function () {
    if( this.stackControl.length === 0){
      return true
    } else{
      return false
    }
  }

  this.canPush = function(){
    if (this.stackControl.length <= this.MAX_SIZE) {
      return true
    } else{
      return "Stack Overflow"
    }
  }
  this.push = function(element){
    if(this.canPush){
    this.stackControl.push(element)
    return this.stackControl
    } else {
      return false
    }
  };

  this.pop = function(element){
    if (this.isEmpty) {
      return this.stackControl.pop(element)
    }else{
      return "Stack Underflow"
    }
  }
 
}


