import prompts from 'prompts';

const answers = [
    {
        name: 'email',
        type: 'text',
        validate: email => email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        message: 'Please enter your account email',
        warn: 'Please enter a valid email'
    },
    {
        name: 'password',
        type: 'password',
        message: 'Please enter your account password'
    },
    {
        name: 'location',
        type: 'select',
        message: 'Please select a location from the following list:',
        choices: [
            {title: 'Archipel de Glénan', value: 'Archipel de Glénan'}, 
            {title: `Île d'Arz`, value: `Île d'Arz`}, 
            {title: 'Marseillan', value: 'Marseillan'}],
        warning: 'Please select a valid location in the list',
    },
    {
        name: 'support',
        type: 'select',
        message: 'Please select a type of "support" from the following list:',
        choices: [
            {title: 'Catamaran', value: 'Catamaran'}, 
            {title: 'Dériveur', value: 'Dériveur'}, 
            {title: 'Windsurf', value: 'Windsurf'}],
        warning: 'Please select a valid support in the list',
    },
    {
        name: 'level',
        type: 'select',
        message: 'Please select a level of "stage" from the following list:',
        choices: [
            {title: '1', value: '1'},
            {title: '2', value: '2'},
            {title: '3', value: '3'},
            {title: '4', value: '4'}, 
            {title: '4FFV', value: '4FFV'}],
        warning: 'Please select a valid level in the list',
    }
];

async function promptUser() {
    const responses = await prompts(answers);
    console.log(responses);
    return responses;
}

export { promptUser };

