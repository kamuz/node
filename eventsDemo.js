import {EventEmitter} from 'events';

const emitter = new EventEmitter();

// When user is created - log it
emitter.on('userCreated', (name) => {
    console.log(`Log: User ${name} created`);
});

// When user is created - show notification
emitter.on('userCreated', (name) => {
    console.log(`Notification: Welcome ${name}`);
});

// Create user
console.log('Creating user...');

emitter.emit('userCreated', 'John');