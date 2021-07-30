import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://recruiter-static-content.s3.ap-south-1.amazonaws.com/json_responses_for_tests',
});

export default instance;
