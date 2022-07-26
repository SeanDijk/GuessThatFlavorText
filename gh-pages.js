import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/SeanDijk/GuessThatFlavorText.git',
        user: {
            name: 'Sean van Dijk',
            email: 'seandijk@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
