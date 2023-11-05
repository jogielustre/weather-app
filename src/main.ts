import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { GithubStrategy } from './auth/strategies/github.strategy'; // Replace with your strategy file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080', // Replace with the origin of your Vue.js frontend
    credentials: true, // Enable credentials (e.g., cookies) for cross-origin requests
  });

  app.use(
    session({
      secret: 'c29229b12ac9f702a4ab7cc73c85e91dcb60429d', // Replace with a strong secret key
      resave: false,
      saveUninitialized: true,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(GithubStrategy);
  
  await app.listen(3000);
}
bootstrap();