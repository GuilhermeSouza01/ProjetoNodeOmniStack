const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;
/**
 * configurando a conexão com banco de dados, requerindo a configuração dentro do arquivo de configuração
 * do knex!!!
 */