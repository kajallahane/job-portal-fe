import EndPoint from "./EndPoint";
const axios = require('axios');

export const getJobList = () => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.CANDIDATE_JOBLIST)
)

export const getRequestList = () => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.RECRUITER_REQUEST_LIST)
)
export const getCandidateJobRequestList = (candidateId) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.CANDIDATE_JOB_REQUEST_LIST + '/' + candidateId)
)
