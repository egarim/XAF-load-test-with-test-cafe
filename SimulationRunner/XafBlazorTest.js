import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';
import Colors from 'colors';
fixture`XAF Blazor Load Test`
    .page('https://xafblazortest.bitframeworks.com/');



test('login', async t => {

    const Username = XPathSelector('/html/body/app/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/input');
    const TextArea = XPathSelector('/html/body/app/div[2]/div[2]/div[3]/div[2]/div/div/div/div/div/div/div/div/div/div/div[2]/textarea');

    // await t
    //     .typeText(Username,'Admin')
    //     .click(LoginButtonFromXpath).wait(2000).click(NewButton).wait(3000);
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis luctus ipsum, et vulputate mi. Nulla massa diam, rhoncus non vehicula vel, finibus a libero. Fusce auctor quam ut metus fermentum dignissim. Etiam a porttitor lectus, eu egestas massa. Quisque felis velit, consequat eu dui eget, molestie ornare velit. Fusce erat sapien, imperdiet eget est nec, consectetur venenatis nibh. Proin vitae nulla ac tellus consectetur sagittis a vel ligula. Vestibulum pharetra metus nulla, eget pulvinar urna tincidunt ac. Phasellus tristique eleifend enim, ut viverra tellus vestibulum pulvinar. Curabitur congue quam purus, nec ornare risus convallis eu. Nullam luctus eu arcu quis aliquam. Maecenas ac laoreet elit. Quisque vitae justo nec augue varius hendrerit ut sit amet neque. Aliquam accumsan aliquam pretium. Vestibulum placerat velit neque, eu feugiat eros molestie at. Proin et leo suscipit, fringilla nulla a, elementum tellus.Fusce aliquam orci nec nunc eleifend, vel blandit nulla posuere. Ut fringilla mauris eu nunc venenatis venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et porttitor ipsum. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eleifend pretium felis hendrerit volutpat. Sed aliquam ligula at risus venenatis, ut eleifend nisl ornare. Nulla id imperdiet elit. Integer eros ex, vestibulum quis semper ac, tincidunt ac elit.Phasellus ut ornare dui, ac viverra diam. Quisque sed sapien tristique, vehicula libero sit amet, porttitor lectus. Donec ac nulla molestie, consequat mi a, fringilla leo. Sed nec est at odio tincidunt ultrices sit amet eu dui. Maecenas lobortis, urna eget lobortis ullamcorper, dolor tortor dictum ex, scelerisque mollis nunc felis sit amet elit. Cras interdum vel ligula non dictum. Quisque in augue nec lorem tempus tristique quis vitae libero. Sed lectus ex, volutpat at interdum sed, suscipit ac magna.Curabitur id gravida tortor. Praesent et lectus augue. Maecenas ut dapibus tortor. Nullam condimentum feugiat odio eget consectetur. Donec eu pulvinar purus. Nunc vitae tincidunt sem. Sed mollis turpis ut ipsum tincidunt imperdiet. Nulla augue nulla, vestibulum nec diam quis, aliquam interdum tortor. Nullam varius enim ac orci vestibulum fermentum. Curabitur tempor elit efficitur sagittis eleifend. Sed luctus tincidunt tortor sit amet pulvinar.Donec consequat vitae ligula vel ultricies. Etiam ante turpis, rhoncus non nisi at, finibus sollicitudin urna. Donec vitae interdum dolor, ut vulputate nulla. Nulla in mi eu massa eleifend porta. Vestibulum pellentesque ullamcorper tortor, eu pulvinar quam aliquet et. In magna nisl, efficitur vel blandit et, tincidunt non ipsum. Praesent tempus sagittis velit, ac cursus turpis pellentesque at. Phasellus non ligula fermentum, hendrerit eros et, laoreet ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis nisl quis justo rutrum egestas placerat eget elit. Cras pulvinar fermentum fermentum. Sed venenatis laoreet sem ac tincidunt. Sed vel vestibulum sapien, vel aliquet urna. Phasellus sapien nisi, accumsan sed sollicitudin vel, aliquam a augue. In auctor diam ac dui mollis, ac scelerisque elit laoreet. Nam pulvinar convallis magna in rhoncus. Proin maximus nisl in viverra ultrices. Cras mattis pharetra vehicula. Fusce porttitor laoreet est, vel ullamcorper felis pulvinar vel. Morbi eget porttitor arcu, ut finibus dolor. Vivamus erat lacus, suscipit sed ex non, condimentum dignissim dui. In sit amet tempor sapien, sit amet bibendum lacus.Donec pharetra ac urna scelerisque ornare. Ut lectus ligula, efficitur ac luctus a, faucibus vel urna. Fusce in enim sed felis vulputate venenatis a sit amet magna. Vivamus sagittis condimentum mi nec scelerisque. Sed sed lorem suscipit, vulputate urna ut, tristique dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus rhoncus neque dui, eget ultrices massa dignissim in. Aliquam erat volutpat. Praesent pellentesque magna elit, vitae tincidunt lectus convallis sed. Integer posuere cursus mattis. Duis pulvinar, est ut elementum vehicula, orci massa dignissim tellus, eu dapibus metus metus id magna.Praesent varius posuere ornare. Vestibulum in interdum nibh, in semper nulla. Nam suscipit ipsum nisi, non elementum enim accumsan sed. Ut vehicula ligula rutrum tellus tincidunt, at malesuada sem gravida. Praesent faucibus at enim vel scelerisque. In ullamcorper metus id lorem aliquam, sed malesuada justo molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac elit quis eros pharetra efficitur. Nullam tincidunt non orci quis laoreet. Etiam nam.';
    console.log("Trying to login".green);
    await t
        .maximizeWindow().wait(3000)
        .typeText(Username, 'Admin')
        .click(Selector('button').withText('Log In')).click(Selector('button').withText('New'))
        //.typeText(TextArea, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lorem blandit, suscipit nisi sed, bibendum lacus. Sed non erat eget leo ornare venenatis. Nullam dictum mattis erat, vel elementum magna malesuada nec. Proin molestie eleifend lacus, ornare porttitor sapien. Suspendisse consectetur turpis massa, vitae condimentum massa interdum eget. Duis condimentum euismod odio, et interdum purus convallis eget. Nam maximus pretium ipsum, nec eleifend nisl pulvinar in. Nunc pharetra urna at orci semper, et viverra nulla cursus. Vestibulum dapibus, sem sit amet malesuada luctus, urna mauris laoreet magna, eleifend pellentesque nunc nisl a enim. Ut sagittis mi ut ligula auctor, sit amet ultricies sem elementum. Sed vitae purus et leo suscipit rhoncus. Nunc molestie leo sed egestas tempor. Quisque pellentesque sollicitudin faucibus.')
        .typeText(TextArea, text, { paste: true })
        .click(Selector('button').withText('Save and Close'));

    console.log("Login complete".green);
    var i;
    for (i = 0; i < 100; i++) {

        console.log("Creating recored:" + i.toString() + "".green);
        await t
            .click(Selector('button').withText('New'))
            //.typeText(TextArea, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra lorem blandit, suscipit nisi sed, bibendum lacus. Sed non erat eget leo ornare venenatis. Nullam dictum mattis erat, vel elementum magna malesuada nec. Proin molestie eleifend lacus, ornare porttitor sapien. Suspendisse consectetur turpis massa, vitae condimentum massa interdum eget. Duis condimentum euismod odio, et interdum purus convallis eget. Nam maximus pretium ipsum, nec eleifend nisl pulvinar in. Nunc pharetra urna at orci semper, et viverra nulla cursus. Vestibulum dapibus, sem sit amet malesuada luctus, urna mauris laoreet magna, eleifend pellentesque nunc nisl a enim. Ut sagittis mi ut ligula auctor, sit amet ultricies sem elementum. Sed vitae purus et leo suscipit rhoncus. Nunc molestie leo sed egestas tempor. Quisque pellentesque sollicitudin faucibus.')
            .typeText(TextArea, text,  { paste: true })
            .click(Selector('button').withText('Save and Close')).wait(2000);

    }
    console.log("It's Done!!".green);


});
