In auth/src/test/setup.ts, change these lines:

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
to this:

  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();


Remove the useNewUrlParser and useUnifiedTopology parameters from the connect method. Change this:

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
to this:

  await mongoose.connect(mongoUri, {});

  mongodb信息

  rSNpVRz0urGa1kSB
