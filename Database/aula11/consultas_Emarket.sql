
-- Categorias e Produtos
-- 1)

SELECT * FROM Categorias;

-- 2)

SELECT CategoriaNome, Descricao FROM Categorias;

-- 3) 

SELECT * FROM Produtos;

-- 4)
SELECT * 
FROM Produtos
WHERE Descontinuado = 1;

-- 5)


SELECT ProdutoNome, ProvedorID
FROM Produtos
WHERE ProvedorID = 8;


-- 6) 
SELECT ProdutoNome, PrecoUnitario
FROM Produtos
WHERE PrecoUnitario BETWEEN 10 AND 22;



SELECT ProdutoNome, PrecoUnitario
FROM Produtos
WHERE PrecoUnitario >= 10 AND PrecoUnitario <= 22;

-- 7) 

SELECT ProdutoNome, UnidadesEstoque, NivelReabastecimento
FROM Produtos
WHERE UnidadesEstoque < NivelReabastecimento;

-- 8) 
SELECT ProdutoNome, UnidadesEstoque, NivelReabastecimento
FROM Produtos
WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas = 0;

-- Clientes
-- 1)
SELECT  Contato, Empresa, Titulo, Pais
FROM Clientes
ORDER BY Pais;

-- 2) 
SELECT *
FROM Clientes
WHERE Titulo LIKE "Owner"; 

-- 3)
SELECT *
FROM Clientes
WHERE Contato LIKE "C%" or "c%";


-- Faturas
-- 1)

SELECT *
FROM Faturas
ORDER BY DataFatura;


-- 2)
SELECT *
FROM Faturas
WHERE PaisEnvio = "USA" AND FormaEnvio != 3;


-- 3)

SELECT *
FROM Faturas
WHERE ClienteID = "GOURL";

-- 4)
SELECT *
FROM Faturas
WHERE EmpregadoID in (2, 3, 5, 8, 9);


-- Parte 2
-- Protudos

-- 1) 
SELECT *
FROM Produtos
ORDER BY PrecoUnitario DESC;

-- 2)
SELECT *
FROM Produtos
ORDER BY PrecoUnitario DESC
LIMIT 10;

-- 3)
SELECT *
FROM Produtos
ORDER BY UnidadesEstoque DESC
LIMIT 10
OFFSET 10;

-- Detalhe Fatura
-- 1)
SELECT FaturaId, ProdutoID, Quantidade
FROM DetalheFatura;


-- 2)
SELECT FaturaId, ProdutoID, Quantidade
FROM DetalheFatura
ORDER BY Quantidade DESC;

-- 3)
SELECT FaturaId, ProdutoID, Quantidade
FROM DetalheFatura
WHERE Quantidade BETWEEN 50 AND 100
ORDER BY Quantidade DESC;

-- 4) 

SELECT FaturaId AS Num_Fatura, ProdutoID, PrecoUnitario * Quantidade AS Total
FROM DetalheFatura;






