package patrimoniumsenai.apipatrimonium.employee;

public record ReadEmployeeDTO(Long id_employee, String name_employee, String cpf, String email, Position position) {

    public ReadEmployeeDTO(Employee employee){
        this(employee.getId_employee(), employee.getName_employee(), employee.getCpf(), employee.getEmail(), employee.getPosition());
    }
}
