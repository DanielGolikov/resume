// apiConnector.ts
import axios, {AxiosInstance} from 'axios';
import getConfig from 'next/config';

interface Data {
    [key: string]: any;
}

class ApiConnector {
    private http: AxiosInstance;

    constructor() {

        const { publicRuntimeConfig } = getConfig();
        console.log(publicRuntimeConfig.API_KEY)
        this.http = axios.create({
            baseURL: publicRuntimeConfig.API_KEY,
            headers: {
                'Content-Type': 'application/json',
                // other common headers can be added here
            },
        });
    }

    public async getData(endpoint: string): Promise<Data> {
        try {
            const response = await this.http.get<Data>(endpoint);
            return response.data;
        } catch (error) {
            console.error(`Error getting data from ${endpoint}:`, error);
            throw error;
        }
    }

    // Add additional methods for other types of requests here, like postData, updateData, deleteData, etc.
}

export default new ApiConnector();
