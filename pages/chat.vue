<template>
    <div>
        <v-text-field v-model="text"></v-text-field><v-btn @click="send">send</v-btn>
        <v-list>
            <v-list-item v-for="(message,index) in messages" :key="index">
                <v-chip v-if="message.user === 'other'">{{message.text}}</v-chip>
                <v-chip v-if="message.user === 'me'" color="blue" style="justify-content:right;">{{message.text}}</v-chip>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    mounted(){
        // Create WebSocket connection.
        this.ws = new WebSocket('ws://localhost:8080');

        // Connection opened
        this.ws.addEventListener('open', this.onOpen);

        // Listen for messages
        this.ws.addEventListener('message', this.onMessage);
    },
    data(){
        return {
            ws: null,
            messages: [],
            text: ''
        }
    },
    methods: {
        onOpen(event){
            //this.ws.send('Hello Server!');
        },
        onMessage(event){
            console.log('Message from server ', event.data);
            this.messages.push({text: event.data, user: 'other'});
        },
        send(){
            this.ws.send(this.text);
            this.messages.push({text: this.text, user: 'me'});
            this.text = '';
        }
    }
}
</script>

<style>

</style>