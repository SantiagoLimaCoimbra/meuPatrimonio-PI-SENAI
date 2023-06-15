package patrimoniumsenai.apipatrimonium.category;

public enum TypeCategory {
    PERMANENTE(1), CONSUMIVEL(2);

    private int idTypeCategory;

    TypeCategory(int idTypeCategory){
        this.idTypeCategory = idTypeCategory;
    }

    public int getIdTypeCategory(){
        return this.idTypeCategory;
    }
}

//Permanete
//Consumivel
