import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";
import JwtService from "@/common/jwt.service";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${JwtService.getToken()}`;
    },

    query(resource, params) {
        let parms = params  + '&nocache=' + new Date().getTime(); // Safari fix
        return Vue.axios.get(resource, parms).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        let parms = slug;
        // if(slug.includes("?") || resource.includes("?")){
        //     if(slug == ""){
        //         resource = resource  + '&nocache=' + new Date().getTime(); // Safari fix
        //     }
        //     else{
        //         parms = slug  + '&nocache=' + new Date().getTime(); // Safari fix
        //     }
        // }
        // else{
        //     parms = slug  + '?nocache=' + new Date().getTime(); // Safari fix
        // }
       return Vue.axios.get(`${resource}${parms}`);

       //return Vue.axios.get(resource, parms);
    },

    post(resource, params) {
        // let parms = resource  + '?nocache=' + new Date().getTime(); // Safari fix
        // return Vue.axios.post(`${parms}`, params);

        return Vue.axios.post(resource, params);
    },

    update(resource, slug, params) {
        let parms = slug  + '?nocache=' + new Date().getTime(); // Safari fix
        return Vue.axios.put(`${resource}/${parms}/`, params).catch(error => {
            throw new Error(`ApiService ${error}`);
        });
    },

    put(resource, params) {
        let parms = resource  + '?nocache=' + new Date().getTime(); // Safari fix
        return Vue.axios.put(`${parms}`, params);
    },

    patch(resource, params) {
        let parms = resource  + '?nocache=' + new Date().getTime(); // Safari fix
        return Vue.axios.patch(`${parms}`, params);
    },

    delete(resource) {
        let parms = resource  + '?nocache=' + new Date().getTime(); // Safari fix
        return Vue.axios.delete(parms);
    },
};

export default ApiService;
