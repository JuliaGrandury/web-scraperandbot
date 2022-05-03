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
        choices: ['Archipel de Glénan', 'Bonifacio', `Île d'Arz`, 'Marseillan', 'Paimpol'],
        warning: 'Please select a valid location in the list',
    },
    {
        name: 'support',
        type: 'select',
        message: 'Please select a type of "support" from the following list:',
        choices: ['Catamaran', 'Dériveur', 'Windsurf'],
        warning: 'Please select a valid support in the list',
    },
    {
        name: 'level',
        type: 'select',
        message: 'Please select a level of "stage" from the following list:',
        choices: ['1', '2', '3', '4', '4FFV'],
        warning: 'Please select a valid level in the list',
    }
];

async function promptUser() {
    const responses = await prompts(answers);
    return responses;
}

export { promptUser };

