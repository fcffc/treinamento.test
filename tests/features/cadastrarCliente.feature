Feature: Cadastro de cliente no portal Ponto Frio

    Scenario: Cadastrar pessoa Fisica no portal
        Given eu estou na página de identificação do portal
        When eu preencho os dados obrigatórios do dados pessoais
        And eu preencho os dados obrigatórios dos dados de acesso ao Ponto Frio
        Then eu sou redirecionada para página principal
