import { Download, Sun, Moon } from 'react-feather'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import './App.css'

import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';

function App() {
  
  const [theme, setTheme] = useState(false)
  const [conteudo, setConteudo] = useState('<h1>O Geniuz Editor</h1><p><br></p><h2>1.0 O que é</h2><p>O Geniuz Editor é um editor de texto online criado com React, projetado para fornecer uma experiência de edição de texto intuitiva e avançada. Ele oferece uma ampla variedade de recursos e funcionalidades para auxiliar na criação e formatação de documentos, além de permitir a exportação direta do texto em PDF.</p><p><br></p><p>O Geniuz Editor oferece várias opções de formatação de texto:</p><p><br></p><ul><li><strong style="color: rgb(102, 163, 224);">Negrito,</strong></li><li><strong style="color: rgb(102, 163, 224);">Itálico,</strong></li><li><strong style="color: rgb(102, 163, 224);">Sublinhado,</strong></li><li><strong style="color: rgb(102, 163, 224);">Alteração de tamanho e estilo de fonte,</strong></li><li><strong style="color: rgb(102, 163, 224);">Cores personalizadas,</strong></li><li><strong style="color: rgb(102, 163, 224);">Muito mais.</strong></li></ul><p><br></p><p>Essas opções permitem que você personalize e aprimore a aparência do seu texto de acordo com suas preferências.</p><p><br></p><p>Além disso, o Geniuz Editor também suporta recursos avançados, como inserção de imagens e links. Você pode adicionar imagens diretamente ao seu texto fazendo o upload de arquivos do seu computador . Da mesma forma, você pode criar links para sites, páginas da web ou outros documentos para enriquecer seu conteúdo.</p><p><br></p><h2>2.0 Dark mode</h2><p>O <strong style="color: rgb(102, 163, 224);">Modo Escuro</strong> do Geniuz Editor não apenas fornece um <strong style="color: rgb(102, 163, 224);">visual atraente</strong>, mas também pode trazer benefícios práticos. O contraste reduzido entre o fundo escuro e o texto ajuda a <strong style="color: rgb(102, 163, 224);">diminuir o cansaço visual</strong> e o estresse nos olhos, especialmente durante longas sessões de escrita ou leitura. Além disso, a <strong style="color: rgb(102, 163, 224);">economia de energia em dispositivos com tela OLED</strong> pode ser um benefício adicional ao utilizar o Modo Escuro.</p><p><br></p><p>Independentemente de você preferir o Modo Escuro ou o Modo Claro, o Geniuz Editor oferece a flexibilidade de escolher a aparência que melhor se adapta às <strong style="color: rgb(102, 163, 224);">suas preferências</strong> e condições de trabalho. Você pode alternar entre os modos <strong style="color: rgb(102, 163, 224);">a qualquer momento com facilidade</strong>, permitindo que você <strong style="color: rgb(102, 163, 224);">personalize sua experiência</strong> de edição de texto de acordo com suas necessidades.</p><p><br></p><h2>3.0 Exportação fácil</h2><p>Uma das principais funcionalidades do Geniuz Editor é a <strong style="color: rgb(102, 163, 224);">capacidade de exportar seu texto diretamente para um arquivo PDF</strong><strong>.</strong></p><p>Isso é extremamente útil quando você precisa <strong style="color: rgb(102, 163, 224);">compartilhar ou imprimir</strong> seus documentos de maneira profissional. Com apenas um clique, você pode <strong style="color: rgb(102, 163, 224);">gerar um PDF</strong> com o conteúdo do seu texto</p><p><br></p><h2>4.0 Atalhos de teclado</h2><p>Além das funcionalidades já mencionadas, o Geniuz Editor também oferece suporte a atalhos de teclado, o que pode ser extremamente útil e <strong style="color: rgb(102, 163, 224);">economizar tempo</strong> durante o processo de edição de texto. Com os atalhos de teclado adequados, você pode realizar várias tarefas com apenas algumas teclas, <strong style="color: rgb(102, 163, 224);">evitando a necessidade de alternar entre o teclado e o mouse</strong> para acessar opções no menu ou na barra de ferramentas.</p><p><br></p><ol><li><strong style="color: rgb(102, 163, 224);">Ctrl+I ou Cmd+I</strong>: Itálico</li><li><strong style="color: rgb(102, 163, 224);">Ctrl+U ou Cmd+U</strong>: Sublinhado</li><li><strong style="color: rgb(102, 163, 224);">Ctrl+K ou Cmd+K</strong>: Adicionar link</li><li><strong style="color: rgb(102, 163, 224);">Tab</strong>: Aumentar recuo (somente em listas)</li><li><strong style="color: rgb(102, 163, 224);">Shift+Tab</strong>: Reduzir recuo (somente em listas)</li></ol><p><br></p><h2>5.0 Sempre com você</h2><p>Como um <strong style="color: rgb(102, 163, 224);">editor de texto online</strong>, o Geniuz Editor oferece a conveniência de acesso em <strong style="color: rgb(102, 163, 224);">qualquer lugar</strong>, a <strong style="color: rgb(102, 163, 224);">qualquer momento</strong>, desde que você tenha uma conexão com a internet. Não é necessário instalar nenhum software adicional, tornando-o <strong style="color: rgb(102, 163, 224);">uma opção fácil e prática</strong> para criar, editar e exportar seus documentos de texto.</p><p><br></p><h2>6.0 Conclusão</h2><p>Em resumo, o <strong style="color: rgb(102, 163, 224);">Geniuz Editor</strong> é uma ferramenta poderosa para <strong style="color: rgb(102, 163, 224);">edição de texto online</strong>. Com sua <strong style="color: rgb(102, 163, 224);">interface intuitiva</strong>, recursos de formatação avançados e a <strong style="color: rgb(102, 163, 224);">capacidade de exportar para PDF</strong>, ele atende às necessidades de usuários que buscam um editor de texto <strong style="color: rgb(102, 163, 224);">eficiente e prático</strong>. Experimente o Geniuz Editor para criar <strong style="color: rgb(102, 163, 224);">documentos profissionais</strong> com facilidade.</p>');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false]}, {font: []}],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['link', ],
      ['clean']
    ]
  };

  const exportarPDF = () => {
    const conteudoHTML = document.querySelector('.ql-editor').innerHTML;
    
    const pdfContent = htmlToPdfmake(conteudoHTML);
    const documentDefinition = { content: [] };
    documentDefinition.content.push(pdfContent);

    pdfMake.createPdf(documentDefinition).open();
  };


  return (
    <main className={theme ? 'dark' : 'light'}>
      <section id='editor'>
        <div id='theme' onClick={() => setTheme(!theme)}>
          <span>
            {
              theme ? (
                <Moon/>
              ) : (
                <Sun/>
              )
            }
          </span>
        </div> 

        <ReactQuill
        value={conteudo}
        onChange={setConteudo}
        modules={modules}
        />    

        <div id='download' onClick={exportarPDF}>
          <span>
            <Download/>
            <p> Baixar PDF </p>
          </span>
        </div> 
      </section>
    </main>
  );
}

export default App
