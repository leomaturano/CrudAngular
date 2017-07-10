import { CadastroPessoasPage } from './app.po';

describe('cadastro-pessoas App', () => {
  let page: CadastroPessoasPage;

  beforeEach(() => {
    page = new CadastroPessoasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
