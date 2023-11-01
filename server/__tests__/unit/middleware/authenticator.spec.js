const authenticator = require('../../../middleware/authenticator');
const Token = require('../../../models/Token');

describe('authenticator Middleware', () => {
  it('should authenticate a valid token', async () => {
    const mockToken = 'Karina_123'; 
    const req = { headers: { authorization: mockToken } };
    const res = {};
    const next = jest.fn();

    Token.getOneByToken = jest.fn().mockResolvedValue({ token: mockToken });

    await authenticator(req, res, next);

    expect(Token.getOneByToken).toHaveBeenCalledWith(mockToken);
    expect(next).toHaveBeenCalled();
  });
   it('should reject an invalid token', async () => {
    const mockToken = 'invalidToken456'; 
    const req = { headers: { authorization: mockToken } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    
    Token.getOneByToken = jest.fn().mockRejectedValue(new Error('Invalid token'));

    await authenticator(req, res, next);

    expect(Token.getOneByToken).toHaveBeenCalledWith(mockToken);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token' });
    expect(next).not.toHaveBeenCalled();   
    });
     
});
