import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: 'f7eb20b81a9340eb67e7',
      clientSecret: 'c29229b12ac9f702a4ab7cc73c85e91dcb60429d',
      callbackURL: 'http://localhost:8080/home',//'http://localhost:3000/auth/github/callback', // Your frontend's callback URL
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Validate and create a user record as needed
    return profile;
  }
}
