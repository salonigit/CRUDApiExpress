module.exports = {
  HOST: 'ec2-100-24-247-137.compute-1.amazonaws.com',
  USER: 'qawssvxopvwtbi',
  PASSWORD: 'c2a54f41521225d741baa3ab2462f3413caf7e6eb76daf3061e494a13ac9bccf',
  DB: 'd3sksq4m11jj7d',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
