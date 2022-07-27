import { publish, clean } from 'gh-pages';
clean()
publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
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
