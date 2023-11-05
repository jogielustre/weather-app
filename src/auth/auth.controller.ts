@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('github')
  @Redirect('')
  githubLogin() {
    // Redirect to GitHub OAuth login
  }

  @Get('github/callback')
  @Redirect('')
  async githubCallback(@Req() req) {
    // Handle GitHub OAuth callback
  }
}