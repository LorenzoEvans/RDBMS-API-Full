const knex = require("knex")
const config = require('../../knexfile.js')

const knexDB = knex(config.development)

const pull = () => {
 return knexDB('cohorts')
}

const pullById = (id) => {
 return knexDB('cohorts')
              .where({id: id})
}

const pullByCohortId = (id) => {
 return knexDB('students')
              .where({cohort_id: id})
}

const place = (cohort) => {
 return knexDB('cohorts')
             .insert(cohort)
             .then(ids => ({id: ids[0]}))
}

const alter = (id, cohort) => {
 return knexDB('cohorts')
              .where({id: id})
              .update(cohort)
}

const clear = (id) => {
 return knexDB('cohorts')
              .where({ id })
              .del()
}



module.exports = {
 pull,
 pullById,
 pullByCohortId,
 place,
 alter,
 clear
}