package patrimoniumsenai.apipatrimonium;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import patrimoniumsenai.apipatrimonium.admin.Admin;

@SpringBootApplication
public class ApiPatrimoniumApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiPatrimoniumApplication.class, args);
	}

}
