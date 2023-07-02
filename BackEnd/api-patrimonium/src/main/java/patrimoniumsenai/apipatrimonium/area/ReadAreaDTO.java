package patrimoniumsenai.apipatrimonium.area;

import patrimoniumsenai.apipatrimonium.employee.Employee;

public record ReadAreaDTO(Long id_area, String name_area, String description_area, Employee employee) {

    public ReadAreaDTO(Area area){
        this(area.getId_area(), area.getName_area(), area.getDescription_area(), area.getEmployee());
    }

}
