import axios from "axios";
import reverse from "django-reverse";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";
import {ACTION_TYPES as AT} from "@/store/_action-types";

export default {
    [AT.refreshToken](context:any) {
      return new Promise((resolve,reject) => {
        axios.post(reverse('core_api:refresh_token'), {
          refresh: context.state.refreshToken
        })
            .then(response => {
              console.log('token update')
              console.log(response.data.access)
              context.commit(MT.ACCESS_SET, response.data.access)
              resolve(response.data.access)
            })
            .catch(err => {
              console.log('error while token update')
              reject(err)
            })
      })
    }
  }