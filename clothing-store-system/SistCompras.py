#Encapsulamiento
class Prenda:
    def __init__(self, nombre, precio, cantidad):
        self.nombre = nombre  # Atributo público 
        self.precio = precio  # Atributo público 
        self.cantidad = cantidad  # Atributo público 

    def mostrar_info(self):
        print(f"Nombre: {self.nombre}, Precio: ${self.precio}, Stock: {self.cantidad}")

# Abstracción
class Inventario:
    def __init__(self):
        self.prendas = []  # Lista para almacenar todas las prendas

    def agregar_prenda(self, prenda):
        self.prendas.append(prenda)  # Agregar prendas al inventario

    def mostrar_inventario(self):
        print("\nInventario Actual:")
        for prenda in self.prendas:
            prenda.mostrar_info()  # Muestra la información de cada prenda

# Herencia
class RopaHombre(Prenda):
    def __init__(self, nombre, precio, cantidad, talla):
        super().__init__(nombre, precio, cantidad)  # Llama al constructor de Prenda
        self.talla = talla  # Atributo específico para RopaHombre

    def mostrar_info(self):
        super().mostrar_info()  # Llama al método mostrar_info() de la clase base
        print(f"Talla: {self.talla}")  

# herencia y polimorfismo
class RopaMujer(Prenda):
    def __init__(self, nombre, precio, cantidad, talla):
        super().__init__(nombre, precio, cantidad)
        self.talla = talla

    def mostrar_info(self):
        super().mostrar_info()
        print(f"Talla: {self.talla}")

# Tienda 
class Tienda:
    def __init__(self, inventario):
        self.inventario = inventario  # Inventario asociado a la tienda

    def procesar_compra(self, nombre_prenda, cantidad):
        
        for prenda in self.inventario.prendas:
            if prenda.nombre.lower() == nombre_prenda.lower():
                if prenda.cantidad >= cantidad:
                    prenda.cantidad -= cantidad  
                    total = cantidad * prenda.precio
                    print(f"\nCompra exitosa: {cantidad} {prenda.nombre}(s) por un total de ${total}")
                    return
                else:
                    print("No hay suficiente stock.")
                    return
        print("Prenda no encontrada en el inventario.")

# Sistema de compras de ropa

# Instancias de RopaHombre y RopaMujer
camisa = RopaHombre("Camisa de Hombre", 25.00, 50, "M")
pantalon = RopaHombre("Pantalón de Hombre", 30.00, 30, "L")
falda = RopaMujer("Falda de Mujer", 28.00, 15, "S")
vestido = RopaMujer("Vestido de Mujer", 45.00, 10, "M")

# inventario
inventario = Inventario()
inventario.agregar_prenda(camisa)
inventario.agregar_prenda(pantalon)
inventario.agregar_prenda(falda)
inventario.agregar_prenda(vestido)


tienda = Tienda(inventario)

# Interacción con el usuario
print("Bienvenido al sistema de compras de ropa. Aquí está el inventario:")
inventario.mostrar_inventario()

while True:
    nombre_prenda = input("\nIngrese el nombre de la prenda que desea comprar (o 'salir' para terminar): ")
    if nombre_prenda.lower() == "salir":
        print("Gracias por su visita.")
        break

    # Pedir al usuario la cantidad que desea comprar
    try:
        cantidad = int(input("Ingrese la cantidad que desea comprar: "))
        if cantidad <= 0:
            print("Por favor ingrese una cantidad válida.")
            continue
    except ValueError:
        print("Por favor ingrese un número válido para la cantidad.")
        continue

    # Procesar la compra
    tienda.procesar_compra(nombre_prenda, cantidad)

    # Mostrar el inventario actualizado después de la compra
    inventario.mostrar_inventario()
