import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';

fixture `Use XPath selectors`
    .page('https://xafblazortest.bitframeworks.com/');


test('login', async t => {
    const Username  = XPathSelector('/html/body/app/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/input');
    //const LoginButtonFromXpath  = XPathSelector('/html/body/app/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[3]/button');
    const LoginButtonFromXpath  = XPathSelector('/html/body/app/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[1]/button');
    const TextArea=XPathSelector('/html/body/app/div[2]/div[2]/div[3]/div[2]/div/div/div/div/div/div/div/div/div/div/div[2]/textarea');
    const NewButton =XPathSelector('/html/body/app/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/button');
    const NewUserUsername=XPathSelector('/html/body/app/div[2]/div[2]/div[3]/div[2]/div/div/div/div/div[1]/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/input');
    const MyDetailsMenu=XPathSelector('/html/body/app/div[2]/div[2]/div[1]/div[1]/nav/ul/li/ul/li[1]/a/div/span');
    // await t
    //     .typeText(Username,'Admin')
    //     .click(LoginButtonFromXpath).wait(2000).click(NewButton).wait(3000);

     await t
        .maximizeWindow()
        .typeText(Username,'Admin')
        .click(Selector('button').withText('Log In')).click(Selector('button').withText('New'))
        .typeText(TextArea,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lorem blandit, suscipit nisi sed, bibendum lacus. Sed non erat eget leo ornare venenatis. Nullam dictum mattis erat, vel elementum magna malesuada nec. Proin molestie eleifend lacus, ornare porttitor sapien. Suspendisse consectetur turpis massa, vitae condimentum massa interdum eget. Duis condimentum euismod odio, et interdum purus convallis eget. Nam maximus pretium ipsum, nec eleifend nisl pulvinar in. Nunc pharetra urna at orci semper, et viverra nulla cursus. Vestibulum dapibus, sem sit amet malesuada luctus, urna mauris laoreet magna, eleifend pellentesque nunc nisl a enim. Ut sagittis mi ut ligula auctor, sit amet ultricies sem elementum. Sed vitae purus et leo suscipit rhoncus. Nunc molestie leo sed egestas tempor. Quisque pellentesque sollicitudin faucibus.')
        .click(Selector('button').withText('Save and Close'));

    var i;
    for (i = 0; i < 100; i++) {
   
        await t
        .click(Selector('button').withText('New'))
        .typeText(TextArea,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lorem blandit, suscipit nisi sed, bibendum lacus. Sed non erat eget leo ornare venenatis. Nullam dictum mattis erat, vel elementum magna malesuada nec. Proin molestie eleifend lacus, ornare porttitor sapien. Suspendisse consectetur turpis massa, vitae condimentum massa interdum eget. Duis condimentum euismod odio, et interdum purus convallis eget. Nam maximus pretium ipsum, nec eleifend nisl pulvinar in. Nunc pharetra urna at orci semper, et viverra nulla cursus. Vestibulum dapibus, sem sit amet malesuada luctus, urna mauris laoreet magna, eleifend pellentesque nunc nisl a enim. Ut sagittis mi ut ligula auctor, sit amet ultricies sem elementum. Sed vitae purus et leo suscipit rhoncus. Nunc molestie leo sed egestas tempor. Quisque pellentesque sollicitudin faucibus.')
        .click(Selector('button').withText('Save and Close'));

    }
  


});

