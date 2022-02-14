module.exports = {
  HOST: 'ec2-100-24-247-137.compute-1.amazonaws.com',
  USER: 'qawssvxopvwtbi',
  PASSWORD: 'postgres',
  DB: 'd3sksq4m11jj7d',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
