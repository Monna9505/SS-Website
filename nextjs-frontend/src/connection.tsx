import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: 'fiki7y6p',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
};

const client = createClient(config);

export default client;