class BasePage{
    constructor(pageName){
       this.pageName = pageName;
    }

    open(){
        console.log("Opening page");
    }

    close(){
        console.log("Closing page");
    }

}

class LoginPage extends BasePage{
}

let page = new LoginPage();
page.open();
page.close(); 
