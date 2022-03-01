use produtos;

create TABLE if not EXISTS `produtos` (
    id int AUTO_INCREMENT PRIMARY Key,
    nome varchar(255),
    preco decimal
);

INSERT INTO produtos (nome, preco) VALUES
('cadeira', 123.12),
('mesa', 1000.00);