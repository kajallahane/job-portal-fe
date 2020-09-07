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

export const fetchCandidate = (candidateId) => (
  axios.get(EndPoint.APP_BASE_URL + EndPoint.CANDIDATE_INFO + candidateId)
)


export const addJobRequest = (data) => (
  axios.post(EndPoint.APP_BASE_URL + EndPoint.ADD_JOB_REQUEST, data)
    .then(res => {
      return "200"
    }).catch(res => {
      return "error"
    })
)

