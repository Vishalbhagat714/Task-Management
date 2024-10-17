import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
const API_KEY = 'YOUR_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

export function Inbox() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES,
            }).then(() => {
                gapi.auth2.getAuthInstance().signIn().then(() => {
                    loadEmails();
                });
            });
        };

        gapi.load('client:auth2', initClient);
    }, []);

    const loadEmails = () => {
        gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'maxResults': 10,
        }).then(response => {
            const messageIds = response.result.messages.map(message => message.id);
            const emailPromises = messageIds.map(id => (
                gapi.client.gmail.users.messages.get({
                    'userId': 'me',
                    'id': id
                })
            ));
            Promise.all(emailPromises).then(results => {
                const emailData = results.map(res => ({
                    id: res.result.id,
                    snippet: res.result.snippet
                }));
                setEmails(emailData);
            });
        });
    };

    return (
        <div className="inbox">
            <h2>Inbox</h2>
            <ul>
                {emails.map(email => (
                    <li key={email.id}>{email.snippet}</li>
                ))}
            </ul>
        </div>
    );
}

export default Inbox;
